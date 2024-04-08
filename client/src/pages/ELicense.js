import ELicenseCom from "../components/ELicense"

export default function ELicense({ userid, usertype, username }) {
    return <>
        <ELicenseCom userid={userid} usertype={usertype} username={username}/>
    </>
}