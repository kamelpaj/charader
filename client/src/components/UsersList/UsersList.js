import React from 'react';
import styled from 'styled-components';

const UsersListContainer = styled.div`
    grid-area: sidebar;
    background-color: #FF851B;
`;

const UsersList = ({ users }) => {
    console.log(users)
    return (
        <UsersListContainer>
            {users.map((user, i) => <div key={i}> <p> {user.name} </p>  </div>)}
        </UsersListContainer>
    )
};

export default UsersList;