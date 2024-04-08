import UserHome from "../components/UserHome";
import PoliceHome from "../components/PoliceHome";
import DmtHome from "../components/DmtHome";

export default function Home({ userid, usertype, username }) {

    return <>
        <div className="w-[100%] p-8">
            {usertype === "driver" && <>

                <UserHome userid={userid} usertype={usertype} username={username}/>

            </>}
            {usertype === "officer" && <>

                <PoliceHome userid={userid} usertype={usertype} username={username}/>

            </>}
            {usertype === "dmt" && <>

                <DmtHome userid={userid} usertype={usertype} username={username}/>

            </>}
        </div>
    </>
}