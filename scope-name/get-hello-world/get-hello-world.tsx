import { Theme, Button } from './theme';

/* a greeting language */
type Language = 'en' | 'es';

/**
 * returns a 'hello world' message, in different languages.
 */
export const getHelloWorld = (language: Language = 'en') => {
  return (
    <Theme.ThemeProvider>
      <Button>themed button!</Button>
    </Theme.ThemeProvider>
  );
}
