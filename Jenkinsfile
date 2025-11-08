pipeline {
    agent any

    environment {
        IMAGE_NAME = "portfolio-nextjs:latest"
        CONTAINER_NAME = "portfolio"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/vishnandaman/portfolio-nextJs.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build -t ${IMAGE_NAME} ."
            }
        }

        stage('Run Container') {
            steps {
                sh """
                docker rm -f ${CONTAINER_NAME} || true
                docker run -d --name ${CONTAINER_NAME} -p 3001:3000 ${IMAGE_NAME}
                """
            }
        }
    }

    post {
        success {
            echo "✅ Portfolio container deployed at http://localhost:3001"
        }
    }
}
