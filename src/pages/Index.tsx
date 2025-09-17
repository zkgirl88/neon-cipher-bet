import { useState } from "react";
import Header from "@/components/Header";
import WalletConnection from "@/components/WalletConnection";
import MatchCard from "@/components/MatchCard";
import BettingHistory from "@/components/BettingHistory";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { useBetting } from "@/hooks/useBetting";
import esportsStage from "@/assets/esports-stage.jpg";

const Index = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string>("");
  const { toast } = useToast();
  const { initializeFHE } = useBetting();

  const handleWalletConnect = (address: string) => {
    setIsWalletConnected(true);
    setWalletAddress(address);
    
    // Initialize FHE encryption when wallet connects
    initializeFHE();
    
    toast({
      title: "Wallet Connected",
      description: "Your wallet has been securely connected with FHE encryption ready.",
    });
  };

  const handleBet = (matchId: string, team: string, amount: number) => {
    toast({
      title: "Bet Placed Successfully",
      description: `Your encrypted bet of ${amount} ETH on ${team} has been placed. Results will be revealed after official adjudication.`,
    });
  };

  // Mock data for eSports matches
  const matches = [
    {
      id: "1",
      game: "Counter-Strike 2",
      tournament: "IEM Cologne 2024",
      teamA: { name: "Team Liquid", logo: "", odds: 1.85 },
      teamB: { name: "FaZe Clan", logo: "", odds: 2.15 },
      startTime: "Today, 14:00 UTC",
      status: "upcoming" as const,
    },
    {
      id: "2",
      game: "League of Legends",
      tournament: "Worlds 2024",
      teamA: { name: "T1", logo: "", odds: 1.65 },
      teamB: { name: "G2 Esports", logo: "", odds: 2.35 },
      startTime: "Today, 16:30 UTC",
      status: "live" as const,
    },
    {
      id: "3",
      game: "Valorant",
      tournament: "Champions 2024",
      teamA: { name: "Sentinels", logo: "", odds: 2.10 },
      teamB: { name: "Fnatic", logo: "", odds: 1.80 },
      startTime: "Tomorrow, 12:00 UTC",
      status: "upcoming" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${esportsStage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      
      {/* Content */}
      <div className="relative z-10">
        <Header />
        
        <main className="container mx-auto px-4 py-8 space-y-8">
          {/* Wallet Connection */}
          <div className="max-w-md mx-auto">
            <WalletConnection
              onConnect={handleWalletConnect}
              isConnected={isWalletConnected}
              address={walletAddress}
            />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 text-center bg-card/30 backdrop-blur-sm border-cyber-green/30">
              <div className="text-2xl font-bold text-cyber-green">2,543</div>
              <div className="text-sm text-muted-foreground">Encrypted Bets</div>
            </Card>
            <Card className="p-6 text-center bg-card/30 backdrop-blur-sm border-cyber-blue/30">
              <div className="text-2xl font-bold text-cyber-blue">$1.2M</div>
              <div className="text-sm text-muted-foreground">Total Volume</div>
            </Card>
            <Card className="p-6 text-center bg-card/30 backdrop-blur-sm border-cyber-purple/30">
              <div className="text-2xl font-bold text-cyber-purple">15</div>
              <div className="text-sm text-muted-foreground">Live Matches</div>
            </Card>
          </div>

          {/* Main Content with Tabs */}
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="matches" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
                <TabsTrigger value="matches">Live Matches</TabsTrigger>
                <TabsTrigger value="history">My Bets</TabsTrigger>
              </TabsList>
              
              <TabsContent value="matches" className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-foreground mb-2">Live & Upcoming Matches</h2>
                  <p className="text-muted-foreground">Place FHE encrypted bets on your favorite eSports teams</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {matches.map((match) => (
                    <MatchCard
                      key={match.id}
                      match={match}
                      onBet={handleBet}
                      isWalletConnected={isWalletConnected}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="history">
                <BettingHistory />
              </TabsContent>
            </Tabs>
          </div>

          {/* How it works */}
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl font-bold text-center text-foreground">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: "1",
                  title: "Connect Wallet",
                  description: "Securely connect your crypto wallet with FHE encryption ready",
                  color: "cyber-pink"
                },
                {
                  step: "2", 
                  title: "FHE Encrypted Bets",
                  description: "Your bets are encrypted with FHE and kept private until match results",
                  color: "cyber-blue"
                },
                {
                  step: "3",
                  title: "Blockchain Payouts",
                  description: "Results revealed after official adjudication, automatic on-chain payouts",
                  color: "cyber-green"
                }
              ].map((item) => (
                <Card key={item.step} className="p-6 text-center bg-card/30 backdrop-blur-sm border-primary/20">
                  <Badge className={`w-8 h-8 rounded-full mb-4 bg-${item.color} text-white`}>
                    {item.step}
                  </Badge>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
