pipeline {
  agent {
    docker {
      image 'jenkinsimage'
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
