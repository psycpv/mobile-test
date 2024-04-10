import styled from 'styled-components'

const DisclaimerContainer = styled.div`
  max-width: 685px;
  margin: 0 auto;
  padding: 20px;
  color: ${({ theme }) => theme.almostWhite};
  font-size: 16px;
`

const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 40px;
  margin-top: 40px;
  text-align: center;
`

const SectionTitle = styled.h3`
  font-size: 30px;
  margin-bottom: 10px;
`

const Paragraph = styled.p`
  margin-bottom: 30px;
`

const List = styled.ul`
  margin-bottom: 10px;
`

const ListItem = styled.li`
  list-style-type: disc;
  margin-left: 20px;
`

export default function Dibs() {
  return (
    <DisclaimerContainer>
      <Title>Terms of Use</Title>

      <Paragraph>
        This website-hosted user interface (this “Interface”) is a frontend software portal to the Vibe Trading
        protocol, a decentralized and community-driven collection of blockchain-enabled smart contracts and tools (the
        “Protocol”). This Interface is made available by the Vibe Trading Corp., however all transactions conducted on
        the Protocol are run by permissionless and autonomous smart contracts. As the Interface the Protocol and its
        related smart contracts are accessible by any user, entity or third party, there may be a number of third-party
        web and mobile user-interfaces that allow for interaction with the Protocol. YOUR USE OF THE INTERFACE AND
        PROTOCOL ARE ENTIRELY AT YOUR OWN RISK.
      </Paragraph>

      <SectionTitle>1. NO WARRANTIES</SectionTitle>
      <Paragraph>
        THE INTERFACE IS AVAILABLE ON AN “AS IS” BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED,
        INCLUDING, BUT NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY, TITLE, FITNESS FOR A PARTICULAR PURPOSE AND
        NON-INFRINGEMENT. You assume all risks associated with using the Interface, and digital assets and decentralized
        systems generally, including but not limited to, that: (a) digital assets are highly volatile; (b) using digital
        assets is inherently risky due to both features of such assets and the potential unauthorized acts of third
        parties; (c) you may not have ready access to assets; and (d) you may lose some or all of your tokens or other
        assets. You agree that you will have no recourse against anyone else for any losses due to the use of the
        Interface. For example, these losses may arise from or relate to: (i) incorrect information; (ii) software or
        network failures; (iii) corrupted cryptocurrency wallet files; (iv) unauthorized access; (v) errors, mistakes,
        or inaccuracies; or (vi) third-party activities. Accordingly, you understand and agree to assume full
        responsibility for all of the risks of accessing and using the Interface and interacting with the Protocol.
      </Paragraph>

      <SectionTitle>2. DATA COLLECTION</SectionTitle>
      <Paragraph>
        The Interface does not collect any personal data, and your interaction with the Protocol will solely be through
        your public digital wallet address. Any personal or other data that you may make available in connection with
        the Protocol may not be private or secure.
      </Paragraph>

      <SectionTitle>3. PROHIBITED ACTIVITY</SectionTitle>
      <Paragraph>
        You agree not to engage in, or attempt to engage in, any of the following categories of prohibited activity in
        relation to your access and use of the Interface:
      </Paragraph>
      <List>
        <ListItem>
          Intellectual Property Infringement. Activity that infringes on or violates any copyright, trademark, service
          mark, patent, right of publicity, right of privacy, or other proprietary or intellectual property rights under
          the law.
        </ListItem>
        <ListItem>
          Cyberattack. Activity that seeks to interfere with or compromise the integrity, security, or proper
          functioning of any computer, server, network, personal device, or other information technology system,
          including (but not limited to) the deployment of viruses and denial of service attacks.
        </ListItem>
        <ListItem>
          Fraud and Misrepresentation. Activity that seeks to defraud us or any other person or entity, including (but
          not limited to) providing any false, inaccurate, or misleading information in order to unlawfully obtain the
          property of another.
        </ListItem>
        <ListItem>
          Market Manipulation. Activity that violates any applicable law, rule, or regulation concerning the integrity
          of trading markets, including (but not limited to) the manipulative tactics commonly known as spoofing and
          wash trading.
        </ListItem>
        <ListItem>Any Other Unlawful Conduct. Activity that violates any applicable law, rule, or regulation.</ListItem>
      </List>

      <SectionTitle>4. NO PROFESSIONAL ADVICE</SectionTitle>
      <Paragraph>
        All information provided by the Interface is for informational purposes only and should not be construed as
        professional advice. You should not take, or refrain from taking, any action based on any information contained
        in the Interface. Before you make any financial, legal, or other decisions involving the Interface, you should
        seek independent professional advice from an individual who is licensed and qualified in the area for which such
        advice would be appropriate.
      </Paragraph>

      <SectionTitle>5. RELEASE OF CLAIMS</SectionTitle>
      <Paragraph>
        You expressly agree that you assume all risks in connection with your access and use of the Interface and your
        interaction with the Protocol. You further expressly waive and release us from any and all liability, claims,
        causes of action, or damages arising from or in any way relating to your use of the Interface and your
        interaction with the Protocol.
      </Paragraph>

      <SectionTitle>6. INDEMNITY</SectionTitle>
      <Paragraph>
        You agree to hold harmless, release, defend, and indemnify us and our officers, directors, employees,
        contractors, agents, affiliates, and subsidiaries from and against all claims, damages, obligations, losses,
        liabilities, costs, and expenses arising from: (a) your access and use of the Interface; (b) your violation of
        any term or condition of these terms of use, the right of any third party, or any other applicable law, rule, or
        regulation; and (c) any other party’s access and use of the Interface with your assistance or using any device
        or account that you own or control.
      </Paragraph>

      <SectionTitle>7. LIMITATION OF LIABILITY</SectionTitle>
      <Paragraph>
        Under no circumstances shall we or any of our officers, directors, employees, contractors, agents, affiliates,
        or subsidiaries be liable to you for any indirect, punitive, incidental, special, consequential, or exemplary
        damages, including (but not limited to) damages for loss of profits, goodwill, use, data, or other intangible
        property, arising out of or relating to any access or use of the Interface, nor will we be responsible for any
        damage, loss, or injury resulting from hacking, tampering, or other unauthorized access or use of the Interface
        or the information contained within it. We assume no liability or responsibility for any: (a) errors, mistakes,
        or inaccuracies of content; (b) personal injury or property damage, of any nature whatsoever, resulting from any
        access or use of the Interface; (c) unauthorized access or use of any secure server or database in our control,
        or the use of any information or data stored therein; (d) interruption or cessation of function related to the
        Interface; (e) bugs, viruses, trojan horses, or the like that may be transmitted to or through the Interface;
        (f) errors or omissions in, or loss or damage incurred as a result of the use of, any content made available
        through the Interface; and (g) the defamatory, offensive, or illegal conduct of any third party. Under no
        circumstances shall we or any of our officers, directors, employees, contractors, agents, affiliates, or
        subsidiaries be liable to you for any claims, proceedings, liabilities, obligations, damages, losses, or costs
        in an amount exceeding the amount you paid to us in exchange for access to and use of the Interface, or $100.00,
        whichever is greater. This limitation of liability applies regardless of whether the alleged liability is based
        on contract, tort, negligence, strict liability, or any other basis, and even if we have been advised of the
        possibility of such liability. Some jurisdictions do not allow the exclusion of certain warranties or the
        limitation or exclusion of certain liabilities and damages. Accordingly, some of the disclaimers and limitations
        set forth in this Agreement may not apply to you. This limitation of liability shall apply to the fullest extent
        permitted by law.
      </Paragraph>
    </DisclaimerContainer>
  )
}
