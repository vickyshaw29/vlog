import { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { FC, useEffect, useState } from 'react';
import { AuthProviders, useLiveQuery, useWunderGraph, withWunderGraph } from '../components/generated/nextjs';
import { useRouter } from 'next/router';

const JobsPage: NextPage = () => {
	const router=useRouter();
	const { user, login, logout } = useWunderGraph();
	const [city, setCity] = useState<string>('Berlin');
	const onClick = () => {
		if (user === null || user === undefined) {
			login(AuthProviders.github);
		} else {
			logout();
		}
	};
	useEffect(()=>{
		if(user){
			router.push("/")
		}
	},[user]);
	return (
		<></>
	);
};

export default withWunderGraph(JobsPage);
