import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import axios from 'axios'

function Home(props) {
    const [indonesia, setIndonesia] = useState([])
    const [loading, setLoading] = useState([false])
    const [updateData, setUpdateData] = useState([])
    const [province, setProvince] = useState([])
    const tableScroll = {height : '600px', overflow: 'scroll'};

    const getIndonesia = async () => {
        setLoading(true)
        try{
            let response = await axios.get('https://api.kawalcorona.com/indonesia')
            let updateData = await axios.get('https://api.kawalcorona.com/')
            setIndonesia(response.data[0])
            setUpdateData(updateData.data[13].attributes.Last_Update);
            setLoading(false)
        }
        catch(e){
            setLoading(true)
            console.log(e.message)
        }
    }

    const getProvince = async () => {
        try{
            let response = await axios.get('https://api.kawalcorona.com/indonesia/provinsi')
            setProvince(response.data)
        }catch(e){
            console.log(e.message);
        }
    }

    useEffect(() => {
        getIndonesia()
        getProvince()
    },[])

    return (
        <div>
            <div className="py-4">
                <div className="container">
                    <h1 className="mb-3 text-white">Jumlah Kasus <span className="text-white">{indonesia.name}</span> Saat Ini</h1>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <Card loading={loading} count={indonesia.positif} status="POSITIF" color="warning"></Card>
                        </div>
                        <div className="col-md-6 mb-4">
                            <Card loading={loading} count={indonesia.sembuh} status="SEMBUH" color="success"></Card>
                        </div>
                        <div className="col-md-6 mb-4">
                            <Card loading={loading} count={indonesia.dirawat} status="DIRAWAT" color="primary"></Card>
                        </div>
                        <div className="col-md-6 mb-4">
                            <Card loading={loading} count={indonesia.meninggal} status="MENINGGAL" color="danger"></Card>
                        </div>
                    </div>
                    <small className="text-muted ">*Update Terakhir: {loading ? 'Loading...' :
                    <span> 
                        {new Date(updateData).toLocaleDateString("en-US")} {new Date(updateData).toLocaleTimeString("en-US")} 
                    </span>
                    }
                    </small>
                    <div className="card mt-4 border-white text-light bg-dark">
                        <div className="card-header"><h4>Data Kasus Coronavirus di Indonesia Berdasarkan Provinsi</h4></div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-dark table-hover" style={tableScroll}>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>PROVINSI</th>
                                            <th>POSITIF</th>
                                            <th>SEMBUH</th>
                                            <th>MENINGGAL</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                        province.map((provinsi, index) => {
                                            let rupiahIndonesiaLocale = Intl.NumberFormat('id-ID');
                                            return(
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{provinsi.attributes.Provinsi}</td>
                                                <td className="text-warning">{rupiahIndonesiaLocale.format(provinsi.attributes.Kasus_Posi)}</td>
                                                <td className="text-success">{rupiahIndonesiaLocale.format(provinsi.attributes.Kasus_Semb)}</td>
                                                <td className="text-danger">{rupiahIndonesiaLocale.format(provinsi.attributes.Kasus_Meni)}</td>
                                            </tr>
                                            )
                                        })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;