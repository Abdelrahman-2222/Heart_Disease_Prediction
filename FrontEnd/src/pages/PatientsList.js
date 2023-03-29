import React, {useEffect, useState} from "react";
import {Table, Button, FormControl, Form} from "react-bootstrap";
import "../styles/patient-list.css";

const PatientsList = () => {
    const [searchArray, setSearchArray] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const [sortType, setSortType] = useState('asc');
    const [sortedColumn, setSortedColumn] = useState('firstName');
    const [query, setQuery] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:8000/api/flist/');
            const data = await response.json();
            const modifiedData = data.map((item) => ({
                ...item,
                firstName: item.first_name,
                lastName: item.last_name,
                HighBloodPressure: item.HighBP,
                Cholesterol: item.HighChol,
                result: item.result,
                submitted_time: item.submitted_time,
            }));
            setSearchArray(modifiedData);
            setFilteredResults(
                modifiedData.sort((a, b) => b.submitted_time.localeCompare(a.submitted_time))
            );
        };

        fetchData();
    }, []);

    const onTextChange = (value) => {
        setQuery(value);
        if (value !== '') {
            const tempArray = searchArray.filter((item) =>
                item.firstName.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredResults(tempArray);
        } else {
            setFilteredResults(
                searchArray.sort((a, b) => b.submitted_time.localeCompare(a.submitted_time))
            );
        }
    };

    useEffect(() => {
        const tempArray = searchArray.filter((item) =>
            item.firstName.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredResults(tempArray);
    }, [searchArray, query]);

    const sortPatientList = () => {
        const sortedList = [...filteredResults].sort((a, b) => {
            const sortColumnA = a[sortedColumn];
            const sortColumnB = b[sortedColumn];
            if (sortColumnA < sortColumnB) {
                return sortType === 'asc' ? -1 : 1;
            } else if (sortColumnA > sortColumnB) {
                return sortType === 'asc' ? 1 : -1;
            } else {
                return 0;
            }
        });
        setFilteredResults(sortedList);
    };


    useEffect(() => {
        const tempArray = searchArray.filter((item) =>
            item.firstName.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredResults(tempArray);
    }, [searchArray, query]);

    return (
        <div className='patient-list-container'>
            <h1>Patients List</h1>
            <div>
                <div className="filters d-flex">
                    <div className='search-bar'>
                        <FormControl
                            onChange={(evt) => onTextChange(evt.target.value)}
                            value={query}
                            placeholder='Search patients by first name'
                        />
                    </div>
                    <div className='filter-bar'>
                        <div className='filter-dropdown'>
                            <Form.Select value={sortedColumn} onChange={(evt) => {
                                setSortedColumn(evt.target.value);
                                setSortType('asc'); // set default sort type as 'asc' when a new column is selected
                                sortPatientList(evt.target.value, 'asc'); // sort the list immediately after a new column is selected
                            }}>
                                <option value='firstName'>Sort by First Name</option>
                                <option value='lastName'>Sort by Last Name</option>
                                <option value='HighBloodPressure'>Sort by High Blood Pressure</option>
                                <option value='Cholesterol'>Sort by High Cholesterol</option>
                                <option value='result'>Sort by Result</option>
                                <option value='submitted_time'>Sort by Submitted Time</option>
                            </Form.Select>
                        </div>
                        {/*<div className='sort-buttons'>*/}
                        {/*    <Button*/}
                        {/*        className={`sort-button ${sortType === 'asc' && 'active'}`}*/}
                        {/*        onClick={() => {*/}
                        {/*            setSortType('asc');*/}
                        {/*            sortPatientList(sortedColumn, 'asc');*/}
                        {/*        }}*/}
                        {/*    >*/}
                        {/*        Ascending*/}
                        {/*    </Button>*/}
                        {/*    <Button*/}
                        {/*        className={`sort-button ${sortType === 'desc' && 'active'}`}*/}
                        {/*        onClick={() => {*/}
                        {/*            setSortType('desc');*/}
                        {/*            sortPatientList(sortedColumn, 'desc');*/}
                        {/*        }}*/}
                        {/*    >*/}
                        {/*        Descending*/}
                        {/*    </Button>*/}
                        {/*</div>*/}
                    </div>
                </div>


            </div>
            <div className='table-div'>
                <Table className="table user-list-table ">
                    <thead>
                    <tr>
                        <th className='w-14'>First Name</th>
                        <th className='w-14'>Last Name</th>
                        <th className='w-16'>High Blood Pressure</th>
                        <th className='w-14'>Cholesterol</th>
                        <th className='w-14'>Result</th>
                        <th className='w-14'>Submitted Time</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredResults.map((item, index) => (
                        <tr key={index}>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>
                                {item.HighBloodPressure ? (
                                    <>Yes</>
                                ) : (
                                    <>No</>
                                )}
                            </td>
                            <td>
                                {item.Cholesterol ? (
                                    <>Yes</>
                                ) : (
                                    <>No</>
                                )}
                            </td>
                            <td>
                                {item.result ? (
                                    <>Yes</>
                                ) : (
                                    <>No</>
                                )}
                            </td>
                            <td>{item.submitted_time}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>
            <Button className='my-button' href='/form'>Add Patient</Button>

        </div>
    );
};

export default PatientsList;

