import React from "react";



// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";

import Delete from "./components/delete";
import DelRecordList from "./components/delrecordList";

const App = () => {
  return (
    <div>
      <Navbar />
      <div style={{ margin: 20 }}>
      <Routes>
        <Route exact path="/" element={<RecordList />} />
        <Route exact path="/deletedRecords" element={<DelRecordList/>}/>
        <Route exact path="/delete/:id" element={<Delete />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
      </Routes>
      </div>
    </div>
  );
};

export default App;



