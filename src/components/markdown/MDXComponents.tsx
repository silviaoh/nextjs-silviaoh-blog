import { Heading } from '@chakra-ui/react';

const MDXComponents = {
  h1: (props: any) => (
    <Heading as="h1" size="xl" fontSize="3.2rem" mb="1.6rem" {...props} />
  ),
  h2: (props: any) => <Heading as="h2" size="lg" mb="1.6rem" {...props} />,
  h3: (props: any) => <Heading as="h3" size="md" mb="1.6rem" {...props} />,
  h4: (props: any) => <Heading as="h4" size="sm" mb="1.6rem" {...props} />,
  h5: (props: any) => <Heading as="h5" size="xs" mb="1.6rem" {...props} />,
  h6: (props: any) => <Heading as="h5" size="xs" mb="1.6rem" {...props} />,
};

export default MDXComponents;
