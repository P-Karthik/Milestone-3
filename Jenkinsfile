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
			stage('Build Docker Image'){
				steps{
			bat 'docker build -f Dockerfile -t docker-discovery-server .'
			}
	}
		stage('Run Docker Image'){
				steps{
			bat 'docker run -p 8761:8761 docker-discovery-server'
			}
	}
    }
}
