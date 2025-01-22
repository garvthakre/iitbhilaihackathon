import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function MemberCard({ member }) {
  const loanProgress = (member.loanCapacity / 300000) * 100

  return (
    <Card>
      <CardHeader className="flex flex-row items-center space-x-4 pb-2">
        <Avatar>
          <AvatarImage src={member.avatar} alt={member.name} />
          <AvatarFallback>{member.name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <CardTitle className="text-lg">{member.name}</CardTitle>
          <p className="text-sm text-muted-foreground">{member.role}</p>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <div className="flex items-center justify-between text-sm">
            <span>Monthly Income</span>
            <span className="font-medium">${member.monthlyIncome.toLocaleString()}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>Credit Score</span>
            <span className="font-medium">{member.creditScore}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>Savings</span>
            <span className="font-medium">${member.savings.toLocaleString()}</span>
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-between text-sm">
              <span>Loan Capacity</span>
              <span className="font-medium">${member.loanCapacity.toLocaleString()}</span>
            </div>
            <Progress value={loanProgress} className="h-2" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
