# Publish to Google Cloud Run

You need to have enable the needed APIs (at least Google Cloud Build and Google Cloud Run). Enable Cloud Build for the service account in Cloud Build settings (you can see a list of services and their statuses).

Authenticate to Google Cloud:

`$ gcloud auth login`

Build the project:

`$ gcloud builds submit --tag gcr.io/huvimestari-fi/huvimestari-next --project huvimestari-fi`

Deploy the project:

`$ gcloud run deploy --image gcr.io/huvimestari-fi/huvimestari-next --project huvimestari-fi --platform managed`

Just select the project & region, wait for the deploy and you're done. The website huvimestari.fi should be up-to-date.
