
import './App.css';

function App() {
  // type User={
  //   name: string,
  //   age: number,
  //   address: string,
  //   hobbies: string[]
  // }
  
const user  = {
  name: 'Ashish',
  age: 20,
  address: 'Mumbai',
  hobbies: ['Reading', 'Writing', 'Coding']
}

  return (
    <div className="bg-red-200 h-screen flex items-center justify-center">
     <div className="text-3xl text-blue-700">Hi i am {user.name} , i am {user.age} years old , i am from {user.address} and i like {user.hobbies[0]} {user.hobbies[1]} {user.hobbies[2]}</div>
    </div>
  );
}

export default App;
