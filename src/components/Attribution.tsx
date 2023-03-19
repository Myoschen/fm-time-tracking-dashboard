interface AttributionProps {
  author: string;
  link: string;
}

function Attribution({ author, link }: AttributionProps) {
  return (
    <footer className="text-sm font-light">
      Challenge by{' '}
      <a
        className="underline hover:text-desaturated-blue transition-colors duration-300 ease-in-out"
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
      >
        Frontend Mentor
      </a>
      . Coded by{' '}
      <a
        className="underline hover:text-desaturated-blue transition-colors duration-300 ease-in-out"
        href={link}
      >
        {author}
      </a>
      .
    </footer>
  );
}

export default Attribution;
