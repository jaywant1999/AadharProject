import React from "react";
import '../../css/UserAddElection.css'
const UserAddElection = () => {
  return (
    <div className="election-container1">
      <div className="UserAddElection">
        <h2>Select Election</h2>
        <form>
          <div>
            <select required>
              <option value="" disabled>
                {" "}
                Select an election
              </option>
              <option vlue=""> Election 1</option>
              <option vlue=""> Election 2</option>
              <option vlue=""> Election 3</option>
            </select>
          </div>
          <button class="submit" type="submit">
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserAddElection;
