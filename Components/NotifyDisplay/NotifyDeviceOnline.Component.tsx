import React, {useCallback, useEffect, useState} from "react";

import {useCookies} from "react-cookie";
import {useRouter} from "next/router";
import axios from "axios";
import {random} from "nanoid";
import {dataAttr} from "@restart/ui/DataKey";

const top = [0, 100, 0, 100, 50, 100, 10, 0, 80, 90, 65, 30, 55, 10]
const left = [100, 0, 0, 100, 100, 50, 30, 70, 80, 30, 80, 20, 70]
const NotifyDeviceOnlineComponent = () => {

    const router = useRouter();
    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    const [devices, setDevices] = useState([]);
    useEffect(() => {
        getDataAfterFiveSecond()
    }, [devices.length])
    const logout = useCallback(async () => {
        removeCookie('user');
        await router.push('/login')
    }, [])

    const notifySend = useCallback(async () => {
        let data = {
            name: 'Mahadi Hasan',
            email: 'eng.mahadi40@gmail.com',
            repoUrl: 'https://github.com/codermahadi/MeldCX-assignment.git',
            message: 'I got the data correctly. Thank you',
        }
        axios.post('http://35.201.2.209:8000/notify', data, {headers: {'Authorization': 'Bearer ' + cookies.user}}).then(r => alert(r.data)).catch(e => console.log(e))
    }, [])

    const getDataAfterFiveSecond = useCallback(async () => {
        await setInterval(function () {
            axios.get('http://35.201.2.209:8000/devices').then(r => setDevices(r.data.devices)).catch(e => console.log(e));
        }, 5000)
    }, [])

    const ConnectDevice = ({item}: any) => {
        return (
            <div className={'ConnectDevice device_1'}
                 style={{
                     top: `${top[item.id]}%`,
                     left: `${left[item.id]}%`,
                     transform: 'translate(-50%, -0%)'
                 }}>
                <div className="ConnectDeviceInner"/>
            </div>
        )
    }
    return (
        <div className={'NotifyDeviceOnlineWrap'}>
            <div className="NotifyDeviceOnlineInner">
                {devices.length > 0 && devices.map((item, i) =>
                    <ConnectDevice item={item} key={i}/>
                )}
                <div className="CountOfDevices">
                    <h2>{devices.length}</h2>
                    <h4>Devices <br/> Online</h4>
                </div>
            </div>
            <div className="notifyBottom">
                <div className="notifyBottomInner">
                    <div className="notifyBtn">
                        <button className="btn notify" onClick={() => notifySend()}>Notify</button>
                        <button className="btn logout" onClick={() => logout()}>Log out</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NotifyDeviceOnlineComponent;