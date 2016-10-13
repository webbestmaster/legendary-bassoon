import	React,	{	Component	}	from	'react'
import	{	Link	}	from	'react-router'
export	default	class	App	extends	Component	{
    render()	{
        return	(
            <div	className='container'>
                <ul	className='nav	nav-pills'>
                    <li><Link	to='/admin'>Админка</Link></li>
                    <li><Link	to='/list'>Список	жанров</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}
