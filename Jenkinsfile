pipeline {
    agent any

    tools {
        maven "maven3"
    }

    stages {
        stage('Git clone/pull stage') {
            steps {
                // Get some code from a GitHub repository
                git 'https://github.com/P-Karthik/Milestone-3.git'
            }
        }
        stage('Compile stage') {
            steps {
                bat "mvn clean compile" 
        }
    }
 
         stage('testing stage') {
             steps {
                bat "mvn test"
        }
    }
 
          stage('build stage') {
              steps {
                bat "mvn package"
        }
    }

    }
}
