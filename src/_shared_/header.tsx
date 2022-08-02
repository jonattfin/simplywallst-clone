import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Stack, Switch } from "@mui/material";
import styled from "@emotion/styled";
import GitHubIcon from "@mui/icons-material/GitHub";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

const pages = [
  "Home",
  "Portfolios",
  "Markets",
  "Discover",
  "Watchlist",
  "Screener",
];

const ResponsiveAppBar = ({
  theme,
  setTheme,
}: {
  theme: string;
  setTheme: any;
}) => {
  const [anchorElNav, setAnchorElNav] =
    React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] =
    React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <TopDiv>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <AdbIcon />
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page, index) => (
                <Button
                  key={page}
                  disabled={index >= 2}
                  href={`/${page.toLowerCase()}`}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Stack direction="row" spacing={2} alignItems="center">
              <Switch
                checked={theme == "dark"}
                onChange={() => {
                  theme == "dark" ? setTheme("light") : setTheme("dark");
                }}
                inputProps={{ "aria-label": "controlled" }}
              />

              <a
                href="https://github.com/jonattfin/simplywallst-clone"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon fontSize="small"></GitHubIcon>
              </a>

              <a
                href="https://www.chromatic.com/builds?appId=62de61e1ffeef704546c2cb6"
                target="_blank"
                rel="noreferrer"
              >
                <AutoStoriesIcon
                  fontSize="small"
                  color="secondary"
                ></AutoStoriesIcon>
              </a>

              <a
                href="https://sonarcloud.io/summary/new_code?id=jonattfin_simplywallst-clone"
                target="_blank"
                rel="noreferrer"
              >
                <ExtraImage src="https://sonarcloud.io/api/project_badges/measure?project=jonattfin_simplywallst-clone&metric=alert_status" />
              </a>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </TopDiv>
  );
};
export default ResponsiveAppBar;

const TopDiv = styled.div`
  padding: 1vh 0px;
`;

const ExtraImage = styled.img`
  height: 50%;
`;
