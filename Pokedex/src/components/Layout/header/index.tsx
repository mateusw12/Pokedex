import { useEffect, useState } from "react";
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
import LanguageSelector from "../../utils/languageSelector";
import { LANGUAGES } from "../../../constant/language";
import { Language } from "../../../interface/language";
import { POKE_EVOLUTIONS } from "../../../constant/evolutions";

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
                path={"/"}
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
                <Nav.Link
                  href="https://play.google.com/store/apps/details?id=com.pokemontv&hl=pt_BR&gl=US&pli=1"
                  target="_blanck"
                  rel="noopener noreferrer"
                >
                  <>Assistir Anime</>
                </Nav.Link>
                <NavDropdown
                  title="Evoluções"
                  id="evolution-nav-dropdown"
                  className="limit-item-dropdown limit-item-dropdown-natureza"
                >
                  {POKE_EVOLUTIONS.map((evolution) => (
                    <Link
                      key={evolution.key}
                      path={`/evolution/${evolution.path}`}
                      children={
                        <NavDropdown.Item
                          key={evolution.key}
                          href={`/evolution/${evolution.path}`}
                        >
                          {evolution.name}
                        </NavDropdown.Item>
                      }
                    />
                  ))}
                </NavDropdown>
                <NavDropdown
                  title="Natureza"
                  id="natureza-nav-dropdown"
                  className="limit-item-dropdown limit-item-dropdown-natureza"
                >
                  {POKE_TYPES.map((type) => (
                    <Link
                      key={type.key}
                      path={`/type/${type.path}`}
                      children={
                        <NavDropdown.Item
                          key={type.key}
                          disabled={type.disabled}
                          href={`/type/${type.path}`}
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
                  title="Mundos"
                  id="nature-nav-dropdown"
                  className="limit-item-dropdown limit-item-dropdown-natureza"
                >
                  {POKE_REGIONS.map((region) => (
                    <Link
                      key={region.key}
                      path={`/region/${region.path}`}
                      children={
                        <NavDropdown.Item
                          key={region.key}
                          href={`/region/${region.path}`}
                        >
                          {region.name}
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
                      path={`/game/${game.path}`}
                      children={
                        <NavDropdown.Item
                          itemID={game.key}
                          href={`/game/${game.path}`}
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
                  <div className="theme-icon">
                    {darkMode ? <FaSun /> : <FaMoon />}
                  </div>
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
                      <LanguageSelector
                        key={item.id}
                        id={item.id}
                        img={item.img}
                        onSelect={handleSelectItem}
                      />
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
                <Nav.Link>
                  <Link
                    path="/about"
                    children={
                      <div className="icon">
                        <AiOutlineInfoCircle />
                      </div>
                    }
                  />
                </Nav.Link>
                <Nav.Link>
                  <Link
                    path="/suggestion"
                    children={
                      <div className="icon">
                        <HiOutlineLightBulb />
                      </div>
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
