const teamMembers = [
  {
    name: "Alice Johnson",
    role: "CEO & Founder",
    image: "/src/assets/team1.jpg",
  },
  {
    name: "Bob Smith",
    role: "Operations Manager",
    image: "/src/assets/team2.jpg",
  },
  {
    name: "Carol White",
    role: "Cleaning Specialist",
    image: "/src/assets/team3.jpg",
  },
];

const Team = () => {
  return (
    <div className="lg:w-3/4 mx-auto lg:px-0 px-5">
      <p className="font-bold text-green-900">Team</p>
      <h2 className="text-5xl font-bold mb-8 uppercase text-green-900">
        Meet Our Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="card card-compact bg-base-100 shadow-xl rounded"
          >
            <figure>
              <img className="w-full h-48" src={member.image} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="text-2xl font-bold text-center">{member.name}</h2>
              <p className="text-center">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
