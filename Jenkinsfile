pipeline {
  agent {
    node {
      label 'master'
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
