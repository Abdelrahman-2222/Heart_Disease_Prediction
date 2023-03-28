import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.naive_bayes import GaussianNB
from sklearn.svm import SVC
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
from sklearn.preprocessing import StandardScaler
from sklearn.neural_network import MLPClassifier
from sklearn.pipeline import make_pipeline
from sklearn.model_selection import GridSearchCV
from sklearn.feature_selection import SelectKBest, f_classif
import numpy as np

import time

import joblib

# Read the dataset from Excel file
start_time = time.time()
data = pd.read_csv("D:/Abelrahman/heart_disease_health_indicators_BRFSS2015.csv")

# Split the data into features (X) and target (y)
X = data.drop(['HeartDiseaseorAttack', 'Education', 'Income'], axis=1)  # drop these column
y = data['HeartDiseaseorAttack']  # output

# Split the data into training, testing, and validation sets
X_train, X_test_val, y_train, y_test_val = train_test_split(X, y, test_size=0.3, random_state=42)
X_test, X_val, y_test, y_val = train_test_split(X_test_val, y_test_val, test_size=0.33, random_state=42)
print(type(X_train))

# Select top 5 features
selector = SelectKBest(f_classif, k=5)
X_train_selected = selector.fit_transform(X_train, y_train)
X_val_selected = selector.transform(X_val)

# Define the models
lr_model = LogisticRegression(C=0.1, solver='lbfgs', max_iter=1000)
dt_model = DecisionTreeClassifier(max_depth=6, min_samples_split=10, min_samples_leaf=5)
knn_model = KNeighborsClassifier(n_neighbors=8, weights='distance')

# define parameter grid
param_grid = {'var_smoothing': np.logspace(0, -9, num=100)}

# define the estimator
gnb = GaussianNB()

# define the grid search object
grid_search = GridSearchCV(gnb, param_grid=param_grid, cv=5)

# fit the grid search object to the data
grid_search.fit(X_train, y_train)

# print the best parameters and score
# print("Best parameters: {}".format(grid_search.best_params_))
# print("Best cross-validation score: {:.2f}".format(grid_search.best_score_))

# Train Naive Bayes model with best parameters
nb_model = grid_search.best_estimator_
nb_model.fit(X_train, y_train)
# svm_model = SVC(kernel='rbf', C=0.1, gamma='scale')
svm_model = SVC(kernel='rbf', C=1, gamma='auto')

rf_model = RandomForestClassifier(n_estimators=100, max_depth=5, min_samples_split=10, min_samples_leaf=5)
nn_model = make_pipeline(StandardScaler(),
                         MLPClassifier(hidden_layer_sizes=(10,), activation='relu', solver='adam', max_iter=500,
                                       random_state=42))

# Preprocessing steps
scaler = StandardScaler()
X_train_norm = scaler.fit_transform(X_train)
X_val_norm = scaler.transform(X_val)

# Create new feature by multiplying two features
X_train_new = X_train_norm.copy()
X_train_new[:, 2] = X_train_norm[:, 2] * X_train_norm[:, 4]
X_val_new = X_val_norm.copy()
X_val_new[:, 2] = X_val_norm[:, 2] * X_val_norm[:, 4]

# Train the models
lr_model.fit(X_train_new, y_train)
dt_model.fit(X_train_new, y_train)
knn_model.fit(X_train_new, y_train)
nb_model.fit(X_train_new, y_train)
svm_model.fit(X_train_new, y_train)
rf_model.fit(X_train_new, y_train)
nn_model.fit(X_train_new, y_train)

# Hyperparameter tuning for random forest using GridSearchCV
rf_param_grid = {'n_estimators': [50, 100, 200], 'max_depth': [5, 10, None], 'min_samples_split': [2, 5, 10],
                 'min_samples_leaf': [1, 5, 10]}
rf_tuned = GridSearchCV(rf_model, rf_param_grid, cv=5)
rf_tuned.fit(X_train_new, y_train)
# print("Random Forest Best Parameters:", rf_tuned.best_params_)
rf_pred = rf_tuned.predict(X_val_new)

# Predict on the validation set
lr_pred = lr_model.predict(X_val_new)
dt_pred = dt_model.predict(X_val_new)
knn_pred = knn_model.predict(X_val_new)
nb_pred = nb_model.predict(X_val_new)
svm_pred = svm_model.predict(X_val_new)
nn_pred = nn_model.predict(X_val_new)

# Evaluate the models
lr_acc = accuracy_score(y_val, lr_pred)
dt_acc = accuracy_score(y_val, dt_pred)
knn_acc = accuracy_score(y_val, knn_pred)
nb_acc = accuracy_score(y_val, nb_pred)
svm_acc = accuracy_score(y_val, svm_pred)
rf_acc = accuracy_score(y_val, rf_pred)
nn_acc = accuracy_score(y_val, nn_pred)

# Print the accuracies
print("Logistic Regression accuracy:", lr_acc)
print("Decision Tree accuracy:", dt_acc)
print("KNN accuracy:", knn_acc)
print("Naive Bayes accuracy:", nb_acc)
print("SVM accuracy:", svm_acc)
print("Random Forest accuracy:", rf_acc)
print("Neural Network accuracy:", nn_acc)
print("Elapsed time:", time.time() - start_time)

joblib.dump(lr_model, 'savedModels/lr_model.joblib')
joblib.dump(dt_model, 'savedModels/dt_model.joblib')
joblib.dump(knn_model, 'savedModels/knn_model.joblib')
joblib.dump(nb_model, 'savedModels/nb_model.joblib')
joblib.dump(svm_model, 'savedModels/svm_model.joblib')
joblib.dump(rf_model, 'savedModels/rf_model.joblib')
joblib.dump(nn_model, 'savedModels/nn_model.joblib')
