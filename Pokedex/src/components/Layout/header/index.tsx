import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaMoon, FaSun } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { HiOutlineLightBulb } from "react-icons/hi";
import NavDropdown from "react-bootstrap/NavDropdown";
import { POKE_REGIONS } from "../../../constant/region";
import Link from "../../utils/link";
import { POKE_TYPES } from "../../../constant/types";
import { POKEMON_GO } from "../../../constant/pokemon-go";
import "../style.css";
import { Dropdown } from "react-bootstrap";
import CustomDropdownItem from "../../utils/languageSelector";
import { LANGUAGES } from "../../../constant/language";
import { Language } from "../../../interface/language";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    if (darkMode) {
      body && body.classList.add("dark-mode");
    } else {
      body && body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const [selectedItem, setSelectedItem] = useState<Language>(LANGUAGES[0]);

  const handleSelectItem = (eventKey: string) => {
    const selectedItem = LANGUAGES.find(
      (item) => item.id === eventKey
    ) as Language;
    setSelectedItem(selectedItem);
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <div className="header">
        <Navbar
          sticky="top"
          style={{
            backgroundColor: darkMode ? "#212529" : "#183575",
          }}
          variant="dark"
          expand="lg"
          className="custom-navbar"
        >
          <Container>
            <Nav.Link>
              <Link
                path={"/home"}
                children={
                  <img
                    src="/assets/header/pokemon-logo.png"
                    alt="Pokémon Logo"
                    height="40"
                    className="d-inline-block align-top"
                  />
                }
              />
            </Nav.Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav className="me-auto">
                <Nav.Link>
                  <Link path={"/pokemons"} children={"Pokemons"} />
                </Nav.Link>
                <Nav.Link disabled={true}>
                  <Link path={"/mega"} children={"Mega Evoluções"} />
                </Nav.Link>
                <Nav.Link
                  href="https://www.google.com/"
                  target="_blanck"
                  rel="noopener noreferrer"
                >
                  <>Assistir Anime</>
                </Nav.Link>
                <NavDropdown
                  title="Mundos"
                  id="basic-nav-dropdown"
                  style={{ color: "#FFF" }}
                >
                  {POKE_REGIONS.map((region) => (
                    <Link
                      path={region.disabled ? "" : `/region/${region.path}`}
                      children={
                        <NavDropdown.Item
                          disabled={region.disabled}
                          itemID={region.key}
                        >
                          {region.name}
                        </NavDropdown.Item>
                      }
                    />
                  ))}
                </NavDropdown>
                <NavDropdown
                  title="Natureza"
                  id="basic-nav-dropdown"
                  className="limit-item-dropdown"
                >
                  {POKE_TYPES.map((type) => (
                    <Link
                      path={type.disabled ? "" : `/natural/${type.path}`}
                      children={
                        <NavDropdown.Item
                          disabled={type.disabled}
                          itemID={type.key}
                        >
                          {type.img ? (
                            <>
                              <img
                                src={type.img}
                                alt={type.name}
                                height="20"
                                className="d-inline-block align-middle me-2"
                              />
                            </>
                          ) : (
                            <></>
                          )}

                          {type.name}
                        </NavDropdown.Item>
                      }
                    />
                  ))}
                </NavDropdown>
                <NavDropdown
                  title="Pokemon GO"
                  id="basic-nav-dropdown"
                  className="limit-item-dropdown"
                >
                  {POKEMON_GO.map((game) => (
                    <Link
                      path={game.disabled ? "" : `/game/${game.path}`}
                      children={
                        <NavDropdown.Item
                          disabled={game.disabled}
                          itemID={game.key}
                        >
                          {game.icon && (
                            <game.icon className="d-inline-block align-middle me-2" />
                          )}
                          {game.name}
                        </NavDropdown.Item>
                      }
                    />
                  ))}
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link onClick={() => handleDarkModeToggle()}>
                  {darkMode ? <FaSun /> : <FaMoon />}
                </Nav.Link>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="primary"
                    id="dropdown-basic"
                    style={{
                      background: "transparent",
                      borderColor: "transparent",
                    }}
                  >
                    {selectedItem ? (
                      <img
                        style={{ width: "20px", height: "20px" }}
                        src={selectedItem.img}
                        alt="Imagem do idioma selecionado"
                      />
                    ) : (
                      <img
                        src={LANGUAGES[0].img}
                        style={{ width: "20px", height: "20px" }}
                      />
                    )}
                  </Dropdown.Toggle>

                  <Dropdown.Menu style={{ minWidth: "10px" }}>
                    {LANGUAGES.map((item) => (
                      <CustomDropdownItem
                        key={item.id}
                        id={item.id}
                        img={item.img}
                        onSelect={handleSelectItem}
                      />
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
                <Nav.Link disabled={true}>
                  <Link path="/about" children={<AiOutlineInfoCircle />} />
                </Nav.Link>
                <Nav.Link disabled={true}>
                  <Link
                    path="/suggestion"
                    children={
                      <HiOutlineLightBulb style={{ transform: "scale(1.3)" }} />
                    }
                  />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
