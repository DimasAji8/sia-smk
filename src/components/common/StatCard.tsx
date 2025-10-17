import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";
import type { StatCard as StatCardType } from "../../types";

interface StatCardProps {
  stat: StatCardType;
}

export function StatCard({ stat }: StatCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
        {stat.icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{stat.value}</div>
        {stat.change && (
          <div className="flex items-center text-xs text-muted-foreground">
            {stat.change.type === "increase" ? (
              <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
            ) : (
              <TrendingDown className="mr-1 h-3 w-3 text-red-500" />
            )}
            <span
              className={
                stat.change.type === "increase"
                  ? "text-green-500"
                  : "text-red-500"
              }
            >
              {stat.change.value}%
            </span>
            <span className="ml-1">dari bulan lalu</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
