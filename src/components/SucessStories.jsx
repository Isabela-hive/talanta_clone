import "./styles/stories.css";
import user1 from "../assets/images/users/1.png";
import user2 from "../assets/images/users/user2.png";
import user3 from "../assets/images/users/user3.png";
import user4 from "../assets/images/users/user4.png";

const SuccessStoryCard = ({ imageSrc, name, profession, training, link }) => {
  return (
    <div className="success-story-card">
      <img src={imageSrc} alt={name} className="profile-image" />
      <h3>{name}</h3>
      <p>{profession}</p>
      <p>{training}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="user-link"
      >
        View Profile
      </a>{" "}
    </div>
  );
};

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      imageSrc: user1,
      name: "Eve Mungai",
      profession: "Creative",
      training: "Nyayo Stadium",
      link: "https://www.example.com/story1",
    },
    {
      id: 2,
      imageSrc: user2,
      name: "Dunstun Emusgut",
      profession: "Architect",
      training: "Kasarani Learning Center",
      link: "https://www.example.com/story2",
    },
    {
      id: 3,
      imageSrc: user3,
      name: "Faith Kipyegon",
      profession: "Athlete",
      training: "Kipyegon keino Stadium",
      link: "https://www.example.com/story2",
    },
    {
      id: 2,
      imageSrc: user4,
      name: "Brian Okinyi",
      profession: "Architect",
      training: "Kasarani Learning Center",
      link: "https://www.example.com/story2",
    },
  ];
  return (
    <div className="success-stories-container">
      {stories.map(story => (
        <SuccessStoryCard
          key={story.id}
          imageSrc={story.imageSrc}
          name={story.name}
          profession={story.profession}
          training={story.training}
          link={story.link}
        />
      ))}
    </div>
  );
};

export default SuccessStories;
