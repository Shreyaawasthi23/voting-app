import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // const CandidateForm = ({ addCandidate})=>{
  //   const [name, setName] = useState('');
  // }
  const[name,setName] = useState('');
  const[candidate,setCandidate] = useState([]);

  const addCandidate =() =>{
    if(name.trim() === '') return;
    setCandidate([...candidate,{name,votes:0}]);
    setName('');
  }
  const updateVotes = (index,increment) =>{
    const newCandidate = [...candidate];
    const newVoteCount = newCandidate[index].votes+increment;
    if(newVoteCount >= 0){
      newCandidate[index].votes = newVoteCount;
      setCandidate(newCandidate.sort((a, b) => b.votes - a.votes));
    }
    // newCandidate[index].votes += increment;
    // setCandidate(newCandidate.sort((a,b) =>b.votes - a.votes));
  };
 
  return (
    <div className='app'>
      <h1> Candidate voting</h1>
      {/* <CandidateForm addCandidate ={addCandidate}/>
      <CandidateList candidate ={candidate} updateVotes={updateVotes} /> */}
      <div>
        <input 
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)} 
        placeholder='Enter the candidate name'/>
        <button onClick={addCandidate}> Submit</button>

      </div>
      <ul>
        {candidate.map((candidate,index) =>(
          <li key={index}>
            {candidate.name} - {candidate.votes}
            <button onClick={()=>updateVotes(index,1)}>+</button>
            <button onClick={() => updateVotes(index, -1)}>-</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
