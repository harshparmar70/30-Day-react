import UserCard from './component/UserCard'

const App = () => {

const users = [
  {
    name: "Harsh",
    role: "Backend Developer",
    photo: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    name: "Anjali",
    role: "Frontend Developer",
    photo: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    name: "Vikram",
    role: "UI/UX Designer",
    photo: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    name: "Sanya",
    role: "DevOps Engineer",
    photo: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    name: "Rohan",
    role: "Full Stack Developer",
    photo: "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    name: "Priya",
    role: "Product Manager",
    photo: "https://randomuser.me/api/portraits/women/6.jpg"
  },
  {
    name: "Arjun",
    role: "Cloud Architect",
    photo: "https://randomuser.me/api/portraits/men/7.jpg"
  },
  {
    name: "Meera",
    role: "Data Scientist",
    photo: "https://randomuser.me/api/portraits/women/8.jpg"
  },
  {
    name: "Kabir",
    role: "Mobile App Developer",
    photo: "https://randomuser.me/api/portraits/men/9.jpg"
  },
];

  return (
    <div className='main'>
      <div className='container'>
        {
          users.map(function(elem,index){
            return <UserCard key={index} name={elem.name} role={elem.role} photo={elem.photo} />
          })
        }
        
      </div>
    </div>
  )
}

export default App