/** Tweet: a single tweet.
 *
 * Props:
 * - name
 * - username
 * - data
 * - message
 */


const Tweet = 
({name, username, date, message })=> {
    return <div className="tweet">
        <li className="username">{username}</li>
        <li>{name}</li>
        <li className="date">{date}</li>
        <li>{message}</li>
    </div>
};