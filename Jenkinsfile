pipeline {
  agent {
    node {
      label 'Master'
    }

  }
  stages {
    stage('Stage 1') {
      steps {
        echo 'trying'
      }
    }

    stage('Stage 2') {
      steps {
        sh 'npm install'
      }
    }

  }
}