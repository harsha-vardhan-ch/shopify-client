import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Record = (props) => (
	<tr>
		<td>{props.record.name}</td>
		<td>{props.record.position}</td>
		<td>{props.record.comments}</td>
		<td>
			<Link className="btn btn-link" to={`/deletedRecords`}>
				Undo
			</Link>{" "}
		</td>
	</tr>
);

export default function Delete() {
	const [records, setRecords] = useState([]);
	const [deleteId, setDeleteId] = useState(0);
	const [delRecords, setdelRecords] = useState([]);

	const [form, setForm] = useState({
		comments: "",
		records: [],
	});
	const params = useParams();
	const navigate = useNavigate();

	// This method fetches the records from the database.
	useEffect(() => {
		setDeleteId(params.id.toString());
		getRecords();
	}, []);

	async function getRecords() {
		const response = await fetch(`http://localhost:3000/record/`);

		if (!response.ok) {
			const message = `An error occured: ${response.statusText}`;
			window.alert(message);
			return;
		}

		const records = await response.json();
		setRecords(records);
	}

	// This method will delete a record
	async function deleteRecord(id) {
		const newRecords = await records.filter((el) => el._id !== id);
        
		setRecords(newRecords);
		setdelRecords();
		fetch(`http://localhost:3000/${id}`, {
			method: "DELETE",
		});
        console.log(delRecords);
	}

	// These methods will update the state properties.
	function updateForm(value) {
		return setForm((prev) => {
			return { ...prev, ...value };
		});
	}

	// When clicked on deleted record
	async function onSubmit(e) {
		await deleteRecord(deleteId);
		navigate("/");
        const tempdelRecords = records.map((record) => {
			return (
				<Record
					record={record}
					key={record._id}
				/>
			);
		});
        console.log(tempdelRecords);
        setdelRecords(tempdelRecords);
	}

    function deletedrecords(){
        return delRecords
    }

	// This following section will display the form that takes deletion comments from the user to delete the record.
	return (
		<div>
			<h3>Delete Record</h3>
			<form onSubmit={onSubmit}>
				<div className="form-group">
					<label htmlFor="name">Comments</label>
					<input
						type="text"
						className="form-control"
						id="name"
						value={form.comments}
						onChange={(e) =>
							updateForm({ comments: e.target.value })
						}
					/>
				</div>
				<br />
				<div className="form-group">
					<input
						type="submit"
						value="Delete Record"
						className="btn btn-primary"
					/>
				</div>
			</form>
		</div>
	);
}
