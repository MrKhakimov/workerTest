import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {ChatScreen, ProfileScreen, TaskScreen, WorkScreen} from "../screens";
import Search from '../images/icons/Search.svg'
import SearchFilled from '../images/icons/SearchFilled.svg'
import Person from '../images/icons/Person.svg'
import PersonFilled from '../images/icons/PersonFilled.svg'
import Chat from '../images/icons/Chat.svg'
import ChatFilled from '../images/icons/ChatFilled.svg'
import Task from '../images/icons/Task.svg'
import TaskFilled from '../images/icons/TaskFilled.svg'
import {Theme} from "../utils/theme";
import {TextRegular} from "../components/ui";
import {styles} from "./styles";

const Tab = createBottomTabNavigator();

const screenOptions = {
    headerStyle: styles.headerStyle,
    headerTitleStyle: styles.headerTitleStyle,
    tabBarActiveBackgroundColor: Theme.backgroundHeader,
    tabBarInactiveBackgroundColor: Theme.backgroundHeader,
}

export const TabScreen  = () => {

    return (
        <Tab.Navigator initialRouteName="Profile" screenOptions={screenOptions} >
            <Tab.Screen
                name="Work"
                component={WorkScreen}
                options={{
                    tabBarLabel: ({ focused, color, size }) => (
                        <TextRegular size={10} color={focused ? Theme.primary : Theme.grayscale}>Work</TextRegular>
                    ),
                    tabBarIcon: ({ focused, color, size }) => (
                        focused ? <SearchFilled /> : <Search />
                    ),
                }}
            />
            <Tab.Screen
                name="Task"
                component={TaskScreen}
                options={{
                    tabBarLabel: ({ focused, color, size }) => (
                        <TextRegular size={10} color={focused ? Theme.primary : Theme.grayscale}>Task</TextRegular>
                    ),
                    tabBarIcon: ({ focused, color, size }) => (
                        focused ? <TaskFilled /> : <Task />
                    )
                }}
            />
            <Tab.Screen
                name="Chat"
                component={ChatScreen}
                options={{
                    tabBarLabel: ({ focused, color, size }) => (
                        <TextRegular size={10} color={focused ? Theme.primary : Theme.grayscale}>Chat</TextRegular>
                    ),
                    tabBarIcon: ({ focused, color, size }) => (
                        focused ? <ChatFilled /> : <Chat />
                    )
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: ({ focused, color, size }) => (
                        <TextRegular size={10} color={focused ? Theme.primary : Theme.grayscale}>Profile</TextRegular>
                    ),
                    tabBarIcon: ({ focused, color, size }) => (
                        focused ? <PersonFilled /> : <Person />
                    )
                }}
            />
        </Tab.Navigator>
    )
}
