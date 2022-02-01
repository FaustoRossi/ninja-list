import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<>
			<Head>
				<title>Ninja List | Home</title>
				<meta name="description" content="ninjas" />
			</Head>
			<div className={styles.container}>
				<h1 className={styles.title}>Hello there </h1>
				<p className={styles.text}>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero itaque
					qui recusandae officiis fuga molestias laboriosam saepe commodi
					corrupti voluptas fugit ipsam libero alias, id ex placeat eaque,
					exercitationem est?
				</p>
				<p className={styles.text}>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero itaque
					qui recusandae officiis fuga molestias laboriosam saepe commodi
					corrupti voluptas fugit ipsam libero alias, id ex placeat eaque,
					exercitationem est?
				</p>
				<Link href="/ninjas">
					<a className={styles.btn}>See Ninjas</a>
				</Link>
			</div>
		</>
	);
}
