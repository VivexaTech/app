// import { useAuth } from "../AuthContext"
// export default function Header() {
//     const {user} = useAuth()
//     console.log(user)
//     return (
//         <>
//             <div className="header">
//                 <div className="pagename">
//                     Welcome, {user.displayName}
//                 </div>

//                 <div className="notification">
//                     <i><img src={user.photoURL} alt="User"/></i>
//                     {/* <i className="bi bi-bell-fill"></i> */}
//                 </div>
//             </div>


            
//         </>
//     )
// }
export function HeaderTools() {
    return (
        <>
            <div className="header">
                <div className="pagename">
                    Join Vivexa Tech
                </div>

                <div className="notification">
                    {/* <i><img src={user.photoURL}/></i> */}
                    <i className="bi bi-bell-fill"></i>
                </div>
            </div>



            
        </>
    )
}