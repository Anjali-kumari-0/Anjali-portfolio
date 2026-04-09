import React from 'react'
import BlogStructure from './BlogStructure'

const AutoCommit = () => {
    const BlogStructureJSON = {
        title: "Create a GitHub repository that auto-commits once every day using GitHub Actions.",
        steps: [
            {
                title: "STEP 1 — Create a New GitHub Repository",
                stepsDes: (<ul>
                    <li>Go to GitHub</li>
                    <li>Click New Repository</li>
                    <li>Repo name: daily-green (or anything you like)</li>
                    <li>Keep it Public</li>
                    <li>Check: Add README.md</li>
                    <li>Click Create Repository</li>
                </ul>),
                des: "Your repo is created."
            },
            {
                title: "STEP 2 — Clone the Repository to Your Computer",
                stepsDes: (<>
                    <i>Open Terminal or CMD:</i>
                    '''git clone'
                </>),
                des: "The repository is cloned to your computer."
            },
            {
                title: 'STEP 3 — Create the GitHub Actions Folder',
                stepsDes: (<>
                    <i>Create directories:</i>
                    '''mkdir .github\workflows'
                </>),
                des: "The GitHub Actions folder is created."

            }, {
                title: 'STEP 4 — Create the Workflow File',
                stepsDes: (<>
                    <i>Create a new yml file:
                        '''.github/workflows/auto-commit.yml'
                    </i>
                </>),
                des: "The workflow file is created."

            },
            {
                title: 'STEP 5 — Paste This Workflow Code',
                stepsDes: (<>
                    <p>Paste This</p>
                    <pre>
                        name: Daily Auto Commit

                        on:
                        schedule:
                        - cron: "0 5 * * *" # Runs daily around 10:30 AM IST
                        workflow_dispatch:  # Allows manual run

                        jobs:
                        auto-commit:
                        runs-on: ubuntu-latest

                        steps:
                        - name: Checkout repo
                        uses: actions/checkout@v3

                        - name: Update log file
                        run: |
                        echo "Updated on $(date)"  daily-log.txt

                        - name: Commit changes
                        run: |
                        git config --global user.name "Anjali-Bot"
                        git config --global user.email "your-email@example.com"
                        git add .
                        git commit -m "Automated update: $(date)" || echo "No changes to commit"
                        git push

                    </pre>

                </>),
                des: "👉 Replace your-email@example.com with your GitHub email."
            },
            {
                title: 'STEP 6 — Commit and Push the Workflow',
                stepsDes: (<pre>
                    git add .
                    git commit -m "Add auto commit workflow"
                    git push origin main

                </pre>),
                des: "The workflow is pushed to GitHub."
            },
            {
                title: 'STEP 7 — Enable Permissions (MOST IMPORTANT)',
                stepsDes: (<ul>
                    <li>Open your repo on GitHub</li>

                    <li>Go to Settings</li>

                    <li>Left sidebar → Actions → General</li>
                    <li>Scroll to Workflow permissions</li>

                    <li>Select:
                        ✔ Read and write permissions</li>
                    <li>Click Save</li>
                </ul>),
                des: "Without this step → auto push will fail.",
            },
            {
                title: "TEP 8 — Run Workflow Manually (First Time Only)",
                stepsDes: (<ul>
                    <li>Go to your repo</li>

                    <li>Click the Actions tab</li>
                    <li>Open Daily Auto Commit workflow</li>
                    <li>Click Run workflow (green button)</li>
                </ul>)
            }
        ]
    }
    return (
        <div className="min-h-screen bg-gray-100">
            <BlogStructure blog={BlogStructureJSON} />
        </div>

    )
}

export default AutoCommit