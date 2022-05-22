import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
// import { Link } from "react-router-dom";

// import Delete from "delRecordList"

import Delete from "./delete";
//import 
export default function DelRecordList() {

    const [items,setItems] = useState([]);
    useEffect(() => {
        setItems(Delete.deletedrecords);
	}, []);

    console.log(items);
    return (
		<div>
			<h3> Deleted Records List</h3>
			<table className="table table-striped" style={{ marginTop: 20 }}>
				<thead>
					<tr>
						<th>Name</th>
						<th>Position</th>
						<th>Deletion Comments</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>{}</tbody>
			</table>
		</div>
	);
}