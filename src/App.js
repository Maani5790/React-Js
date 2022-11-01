import logo from './logo.svg';
import './App.css';

function App() {
    

  const name = "Hello World";
    const obj = { name: "Hello World Object" }
    const data = ['javaScript', 'Python', 'Django' , 'Firebase' , 'Css']
    const list = [{ name: "Hello World 1" }, { name: "Hello World 2" }, { name: "Hello World 3" }] 
    const complex = [{ company: 'XYZ', jobs: ['Javascript', 'React'] }, { company: 'ABC', jobs: ['AngularJs', 'Ionic'] }]


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome <code>To My</code> Rect App
        </p>
        <a
          className="App-link"
          href="http5s://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click Here
        </a>
       
       <h1>Question 1</h1>
       <p> Name: {name}</p>


       <h1>Question 2</h1>
       <p>Object: {obj.name}</p>


       <h1>Question 3</h1>
       <ul>
        {data.map(item=>{
          return <li>{item}</li>
        })}
       </ul>

       <h1>Question 4</h1>
       <ul>
        {list.map((item,index)=>{

          return<li>List At Index {index} ---- {item.name}</li>
        })}
       </ul>

       <h1>Question 5 </h1>
       {complex.map((item, index) => {
          return (
            <table border='8'>
              <th>
                <tr>

                


              
              <p>({index}) Company: {item.company}</p>
              <p>Jobs: {item.jobs[0]}, {item.jobs[1]}</p>
              <hr />
              </tr>
              </th>
            </table>

          )
        })}


       
         
        



      </header>
    </div>
  );
}

export default App;
