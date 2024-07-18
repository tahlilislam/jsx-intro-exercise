const Person = ({ name, age, hobbies }) => {
  const MAX_NAME_LENGTH = 6;

  const reply = age >= 18 ? "Please go vote!" : "You must be 18 to vote.";

  return (
    <div>
      <p>Learn some information about this person.</p>
      <ul>
        <li>
          Hi, my name is <b>{name.slice(0, MAX_NAME_LENGTH)}</b>.
        </li>
        <li>
          I am <b>{age}</b> years old.
        </li>
        <li>
          Hobbies:
          <ul>
            {hobbies.map((hobby) => (
              <li>{hobby}</li>
            ))}
          </ul>
        </li>
      </ul>
      <h3>{reply}</h3>
    </div>
  );
};

// const Bouncer = (props) => {
//   let reply;
//   if (props.age < 18) {
//     reply = "Sorry kid, you can't come in";
//   } else if (props.age < 21) {
//     reply = "You can come in, but no drinking";
//   } else {
//     reply = (
//       <span>
//         Come in, you CAN drink!
//         <img src="https://media.giphy.com/media/eXg8Ij7JgnyDu/giphy.gif" />
//       </span>
//     );
//   }
//   return (
//     <div>
//       <p>
//         <b>Bouncer:</b> How old are you?
//       </p>
//       <p>
//         <b>You:</b> I am {props.age} years old
//       </p>
//       <p>
//         <b>Bouncer:</b> {reply}
//       </p>
//     </div>
//   );
// };
