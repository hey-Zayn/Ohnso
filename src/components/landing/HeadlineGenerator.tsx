"use client";

import { useState } from "react";
import { getHeadlineSuggestions } from "@/app/actions";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, Wand2, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const productInfo = {
  name: "Launchpad",
  description: "An all-in-one solution to streamline workflows, boost collaboration, and achieve goals faster. It integrates with existing tools and provides powerful analytics.",
  target: "Startups and small to medium-sized businesses looking to improve their operational efficiency."
};

interface HeadlineGeneratorProps {
  setHeadline: (headline: string) => void;
}

export default function HeadlineGenerator({ setHeadline }: HeadlineGeneratorProps) {
  const [tone, setTone] = useState("Professional");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [usedSuggestion, setUsedSuggestion] = useState<string | null>(null);
  const { toast } = useToast();

  const handleGenerate = async () => {
    setIsLoading(true);
    setUsedSuggestion(null);
    setSuggestions([]);
    const result = await getHeadlineSuggestions(
      productInfo.name,
      productInfo.description,
      productInfo.target,
      tone
    );
    setIsLoading(false);
    if (result.success && result.suggestions) {
      setSuggestions(result.suggestions);
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: result.error || "Could not generate suggestions.",
      });
      setSuggestions([]);
    }
  };
  
  const handleUseSuggestion = (suggestion: string) => {
    setHeadline(suggestion);
    setUsedSuggestion(suggestion);
  };

  return (
    <Card className="shadow-2xl bg-background/80 backdrop-blur-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-headline">
          <Wand2 className="text-accent" />
          AI Headline Generator
        </CardTitle>
        <CardDescription>
          Generate alternative headlines to find the perfect hook for your audience.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="tone">Select a Tone</Label>
          <Select value={tone} onValueChange={setTone}>
            <SelectTrigger id="tone" className="w-full">
              <SelectValue placeholder="Select a tone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Professional">Professional</SelectItem>
              <SelectItem value="Playful">Playful</SelectItem>
              <SelectItem value="Bold">Bold</SelectItem>
              <SelectItem value="Inspirational">Inspirational</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {suggestions.length > 0 && (
          <div className="space-y-2 pt-4">
             <Label>Suggestions</Label>
            {suggestions.map((suggestion, index) => (
              <div key={index} className="flex items-center justify-between gap-2 p-3 rounded-lg border bg-muted/50">
                <p className="text-sm flex-1">{suggestion}</p>
                <Button size="sm" variant="ghost" onClick={() => handleUseSuggestion(suggestion)} disabled={usedSuggestion === suggestion}>
                  {usedSuggestion === suggestion ? <Check className="w-4 h-4 text-green-500" /> : "Use"}
                </Button>
              </div>
            ))}
          </div>
        )}

      </CardContent>
      <CardFooter>
        <Button onClick={handleGenerate} disabled={isLoading} className="w-full">
          {isLoading ? <Loader2 className="animate-spin" /> : "Generate Headlines"}
        </Button>
      </CardFooter>
    </Card>
  );
}
