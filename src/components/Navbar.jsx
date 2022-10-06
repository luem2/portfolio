import React from 'react';
import Image from 'next/image';
import { Button, Link, Navbar, Switch } from '@nextui-org/react';
import {
  logo,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillGithub,
  BsFillSunFill,
  BsFillMoonFill,
  GrMail,
} from '/src/assets';

export default function NavigateBar() {
  const collapseItems = [
    'Home',
    'About',
    'Tech Stack',
    'Projects',
    'Contact',
    <Button key='buttonCV' color='secondary' auto>
      Download CV
    </Button>,
  ];

  return (
    <Navbar variant='sticky'>
      <Navbar.Toggle showIn='md' />
      <Navbar.Brand hideIn='md'>
        <Image src={logo} height={75} width={75} alt='Luem Logo' />
      </Navbar.Brand>
      <Navbar.Content activeColor='secondary' hideIn='md'>
        <Navbar.Link isActive>Home</Navbar.Link>
        <Navbar.Link>About</Navbar.Link>
        <Navbar.Link>Tech Stack</Navbar.Link>
        <Navbar.Link>Projects</Navbar.Link>
        <Navbar.Link>Contact</Navbar.Link>
        <Button color='secondary' auto>
          Download CV
        </Button>
      </Navbar.Content>
      <Navbar.Content hideIn={'xs'}>
        <Navbar.Item>
          <AiFillLinkedin size={25} />
        </Navbar.Item>
        <Navbar.Item>
          <AiOutlineTwitter size={25} />
        </Navbar.Item>

        <Navbar.Item>
          <AiFillGithub size={25} />
        </Navbar.Item>
        <Navbar.Item>
          <GrMail size={25} />
        </Navbar.Item>
        <Navbar.Item>
          <Switch
            checked={true}
            color='secondary'
            size='md'
            iconOff={<BsFillMoonFill size={20} />}
            iconOn={<BsFillSunFill size={20} />}
          />
        </Navbar.Item>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Brand showIn={'md'}>
          <Image src={logo} height={75} width={75} alt='Luem Logo' />
        </Navbar.Brand>
        <Navbar.Collapse disableAnimation>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              activeColor='secondary'
              css={{
                color: index === collapseItems.length - 1 ? '$error' : '',
              }}
              isActive={index === 2}
            >
              <Link
                color='inherit'
                css={{
                  minWidth: '100%',
                }}
                href={`#Inicio`}
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar.Content>
    </Navbar>
  );
}
