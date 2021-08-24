import React from 'react';
import './App.css';
import UserList from "./components/UserList";
import SearchFilter from "./components/SearchFilter";

const App: React.FC = (): JSX.Element => {
    return (
        <div className="container">
            <SearchFilter />
            <UserList />
        </div>
    );
}

export default App;
