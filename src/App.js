import React, {
    Component
} from 'react';
import uuid from 'uuid'
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
                    id:uuid.v4(),
                    title: 'Business Website',
                    category: 'Web Design'
                },
                {
                    id:uuid.v4(),
                    title: 'Social Website',
                    category: 'Mobile Development'
                },
                {
                    id:uuid.v4(),
                    title: 'Ecomerce Shopping Cart',
                    category: 'Web Development'
                }
            ]
        })

    }
    
    
    handleDeleteProject(id){
        let projects = this.state.projects;
        projects = projects.filter(project=> project.id != id)
        this.setState({projects:projects})
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
                <Projects onDelete={this.handleDeleteProject.bind(this)} projects = {
                    this.state.projects
                }/> 
            </div>
        );
    }
}

export default App;
