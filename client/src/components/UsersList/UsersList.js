import React from 'react';
import styled from 'styled-components';

const UsersListContainer = styled.div`
    grid-area: sidebar;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const User = styled.div`
    width: 80%;
    text-align: center;
    padding: 10px;
    transition: all .15s ease-out;

    &:hover {
        background-color: rgba(250, 177, 160, 0.2);
        cursor: pointer;
    }
`;

const UsersList = ({ users }) => {
    console.log(users)
    return (
        <UsersListContainer>
            <h3>Active users</h3>
            {users.map((user, i) => <User key={i}> {user.name}  </User>)}
        </UsersListContainer>
    )
};

export default UsersList;