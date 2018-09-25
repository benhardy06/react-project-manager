import React, {
    Component
} from 'react';
import './App.css';
import Projects from './components/Projects'
import AddProject from './components/AddProject'

class App extends Component {
    constructor() {
        super();
        this.state = {
            projects: [

            ]
        }
    }


    componentWillMount() {
        this.setState({
            projects: [
                {
                    title: 'Business Website',
                    category: 'Web Design'
                },
                {
                    title: 'Social Website',
                    category: 'Mobile Development'
                },
                {
                    title: 'Ecomerce Shopping Cart',
                    category: 'Web Development'
                }
            ]
        })

    }

    handleAddProject(project){
        let projects = this.state.projects
        projects.push(project)
        this.setState({projects:projects})
    }
    render() {
        return ( 
            <div className = "App" >
                <AddProject addProject={this.handleAddProject.bind(this)}/>
                <Projects projects = {
                    this.state.projects
                }/> 
            </div>
        );
    }
}

export default App;
