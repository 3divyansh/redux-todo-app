const TodoList = ({ list, remove }) => {
	return (
	  <>
	    {list?.length > 0 ? (
	      <ul className="todo-list">
		 {list.map((entry, index) => (
		   <div className="todo w-60 container mx-auto mt-4 flex justify-between items-center bg-white shadow-md rounded-lg p-4 mb-2">
		     <li key={index} className="text-gray-700 text-lg">
			{entry}
		     </li>
		     <button
			className="delete-button bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded"
			onClick={() => {
			  remove(entry);
			}}
		     >
			Delete
		     </button>
		   </div>
		 ))}
	      </ul>
	    ) : (
	      <div className="empty flex justify-center items-center text-gray-500">
		 <p>No task found</p>
	      </div>
	    )}
	  </>
	);
     };
     
     export default TodoList;
     