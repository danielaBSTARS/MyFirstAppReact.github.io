function getImageUrl(person) {
    return `https://i.imgur.com/${person.imageId}s.jpg`;
}

function Avatar({ person, size }) {
    return (
        <div style={{ textAlign: 'center', margin: '20px', maxWidth: 260 }}>
            <img
                className="avatar"
                src={getImageUrl(person)}
                alt={person.name}
                width={size}
                height={size}
                style={{ borderRadius: '50%' }}
            />
            <h5 className="mt-3 mb-1">{person.name}</h5>
            <h6 className="text-muted mb-2" style={{ fontWeight: 600 }}>{person.title}</h6>
            <p className="text-muted small mb-0">{person.description}</p>
        </div>
    );
}

export default function Props() {
    return (
        <div className="container py-5">
            <h1 className="text-center mb-3">Props React</h1>
            <p className="lead text-center text-muted mx-auto" style={{ maxWidth: 900 }}>
                Este componente demuestra el uso de props en React. Cada Avatar recibe datos desde el componente padre, permitiendo reutilizar el mismo componente con diferente información.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: 60, flexWrap: 'wrap', marginTop: 30 }}>
                <Avatar
                    size={100}
                    person={{
                        name: 'Katsuko Saruhashi',
                        title: 'Geoquímica',
                        description: 'Primera mujer en ser elegida para la Academia de Ciencias de Japón.',
                        imageId: 'YfeOqp2'
                    }}
                />

                <Avatar
                    size={80}
                    person={{
                        name: 'Aklilu Lemma',
                        title: 'Científico etíope',
                        description: 'Descubrió un tratamiento natural contra la esquistosomiasis.',
                        imageId: 'OKS67lh'
                    }}
                />

                <Avatar
                    size={50}
                    person={{
                        name: 'Lin Lanying',
                        title: 'Ingeniera de materiales',
                        description: 'Contribuyó al desarrollo de semiconductores en China.',
                        imageId: '1bX5QH6'
                    }}
                />
            </div>
        </div>
    );
}