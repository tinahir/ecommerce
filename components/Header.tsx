/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import Link from 'next/link';

const Header = () => {
  return (
    <header
      sx={{
        variant: 'styles.header',
      }}
    >
      <div
        sx={{
          maxWidth: 768,
          mx: 'auto',
          px: 3,
          display: 'flex',
          alignItems: 'baseline',
        }}
      >
        <Link href="/">
          <a
            sx={{
              variant: 'styles.navlink',
              fontSize: 5,
              py: 2,
            }}
          >
            Test App
          </a>
        </Link>
        <div sx={{ mx: 'auto' }} />
        <Box
          sx={{
            ml: 3,
            py: 2,
            textDecoration: 'none',
          }}
        >
          <Link href="/orders">
            <a>Orders</a>
          </Link>
        </Box>
        <Box
          sx={{
            ml: 3,
            py: 2,
          }}
        >
          <Link href="/">
            <a>Customers</a>
          </Link>
        </Box>
      </div>
    </header>
  );
};

export default Header;
