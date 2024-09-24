import NavigationBar from '@/components/navbar'
import React from 'react'

function Page() {
  return (
    <div>
        <NavigationBar/>

        <div style={{ marginTop: "100px" }} className='text-success'>
            <div>
                <h3>1. Introduction</h3>
                <p>Welcome to the official website for Druglords Legacy. This Privacy Policy explains how we handle your information when you visit our website, where you can download the game, watch trailers, and read about it. We value your privacy and are committed to protecting your personal information.</p>
            </div>
            <div>
                <h3>2. Information We Collect</h3>
                <p>We do not actively collect personal information from users. The only data we track is related to the download counter for our game. This information does not identify individual users and is used solely to provide statistics on how many times Druglords Legacy has been downloaded.</p>
            </div>
            <div>
                <h3>3. Use of Information</h3>
                <p>The download counter helps us understand the popularity of the game. We do not use this data for any marketing purposes or share it with third parties.</p>
            </div>
            <div>
                <h3>4. Cookies and Tracking Technologies</h3>
                <p>Our website does not use cookies or similar tracking technologies. The download counter operates without tracking your personal information.</p>
            </div>
            <div>
                <h3>5. Age Restrictions</h3>
                <p>Our services are not intended for children under 16 years of age. If we become aware that we have collected personal information from a child under 16, we will take steps to delete such information.</p>
            </div>
            <div>
                <h3>6. Your Rights</h3>
                <p>As a user, you have the right to request access to the information we track (the download counter). Since we do not collect personal data, there are no other rights related to personal information.</p>
            </div>
            <div>
                <h3>7. Changes to This Privacy Policy</h3>
                <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.</p>
            </div>
            <div>
                <h3>8. Contact Us</h3>
                <p>If you have any questions or concerns about this Privacy Policy, please feel free to contact us on <a href="https://discord.gg/82HdVhnUZT" className='text-success'>Discord</a></p>
            </div>
        </div>
    </div>
  )
}

export default Page