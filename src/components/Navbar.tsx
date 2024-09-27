'use client'
import { useState, useEffect, FunctionComponent } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavItem: FunctionComponent<{
    active: string
    setActive: Function
    name: string
    route: string
}> = ({ active, setActive, name, route }) => {
    return active !== name ? (
        <Link href={route}>
            \
            <span
                className='mx-2 text-[#0ae448] cursor-pointer hover:border-b-4 hover:text-green hover:border-[#fffce1]'
                onClick={() => setActive(name)}>
                {name}
            </span>

        </Link>
    ) : null
}

const Navbar = () => {
    const pathname = usePathname();

    const [active, setActive] = useState('')

    //later
    useEffect(() => {
        if (pathname === '/') setActive('About')
        else if (pathname === '/projects') setActive('Projects')
        else if (pathname === '/resume') setActive('Resume')
    }, [])

    return (
        <div className='flex items-center justify-between px-5 py-3 my-3'>
            <span className='text-xl text-[#0ae448] font-bold border-b-4 md:text-2xl border-green-700'>
                {active}
            </span>

            <div className='text-base font-normal md:text-xl'>
                <NavItem
                    active={active}
                    setActive={setActive}
                    name='About'
                    route='/'
                />
                <NavItem
                    active={active}
                    setActive={setActive}
                    name='Resume'
                    route='/resume'
                />
                <NavItem
                    active={active}
                    setActive={setActive}
                    name='Projects'
                    route='/projects'
                />
            </div>
        </div>
    )
}

export default Navbar