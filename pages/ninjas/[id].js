export const getStaticPaths = async () => {

	// le dice cuantas html pages tiene que crear en base a esto

	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const data = await res.json();

	// map data to an array of path objects with params (id)
	const paths = data.map((ninja) => {
		return {
			params: { id: ninja.id.toString() },
		};
	});

	return {
		//  aca ve cuantaas paginas tiene que pre renderizar
		paths,   
		fallback: false,
	};
};

export const getStaticProps = async (context) => {
	// para cada una de esas paginas crea realiza el fecth por aca
	const id = context.params.id;
	const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
	const data = await res.json();

	return {
		props: { ninja: data },
	};
};

// y las crea eventualmente aca

const Details = ({ ninja }) => {
	return (
		<div>
			<h1>{ninja.name}</h1>
			<p>{ninja.email}</p>
			<p>{ninja.website}</p>
			<p>{ninja.address.city}</p>
		</div>
	);
};

export default Details;
